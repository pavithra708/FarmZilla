import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import fs from 'fs';

const __dirname = path.resolve();
const app = express();

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// MongoDB connection with environment variable
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/fertilizerRecommender';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ Connected to MongoDB');
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});

// Fix schema to accept fertilizer as an object
const FertilizerSchema = new mongoose.Schema({
  cropType: String,
  soilType: String,
  npkRanges: {
    low: { N: Number, P: Number, K: Number },
    high: { N: Number, P: Number, K: Number }
  },
  fertilizer: {
    name: String,
    quantity: Number,
    method: String,
    precautions: String
  }
});

const Fertilizer = mongoose.model('Fertilizer', FertilizerSchema, 'fertilizers');

// Load fertilizer data
const fertilizerData = JSON.parse(fs.readFileSync(path.join(__dirname, 'fertilizer_data.json')));

const loadDataIntoDB = async () => {
  try {
    await Fertilizer.deleteMany({});
    await Fertilizer.insertMany(fertilizerData);
    console.log('✅ Fertilizer data loaded into DB');
  } catch (err) {
    console.error('❌ Error loading data into DB:', err);
  }
};

loadDataIntoDB();

app.post('/api/recommend-fertilizer', async (req, res) => {
  const { cropType, soilType, nitrogen, phosphorus, potassium } = req.body;

  try {
    const recommendations = await Fertilizer.find({
      cropType: new RegExp(`^${cropType}$`, 'i'),
      soilType: new RegExp(`^${soilType}$`, 'i'),
      'npkRanges.low.N': { $lte: nitrogen },
      'npkRanges.high.N': { $gte: nitrogen },
      'npkRanges.low.P': { $lte: phosphorus },
      'npkRanges.high.P': { $gte: phosphorus },
      'npkRanges.low.K': { $lte: potassium },
      'npkRanges.high.K': { $gte: potassium },
    });

    if (recommendations.length === 0) {
      return res.json({
        fertilizer: {
          name: "General Fertilizer Recommendation",
          quantity: "",
          method: "",
          precautions: "Adjust NPK levels based on soil test"
        }
      });
    }

    res.json({ fertilizer: recommendations[0].fertilizer });
  } catch (err) {
    console.error('❌ Error fetching recommendation:', err);
    res.status(500).json({ error: 'Failed to fetch recommendations' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
