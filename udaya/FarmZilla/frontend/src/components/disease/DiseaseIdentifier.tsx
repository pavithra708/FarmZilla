import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface PredictionResult {
  name: string;
  cause: string;
  cure: string;
}

const DiseaseIdentifier: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setPrediction(null); // clear previous prediction
      setError(null);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file first.');
      return;
    }

    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file); // <-- match your Flask code, key should be 'file'

    try {
      const response = await axios.post('http://127.0.0.1:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.data.prediction) {
        setPrediction(response.data.prediction);
      } else if (response.data.error) {
        setError(response.data.error);
      }
    } catch (err: any) {
      console.error('Error uploading image:', err);
      setError('Upload failed. Make sure Flask server is running on port 5000.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Plant Disease Recognition
        </h1>

        <form onSubmit={handleSubmit} className="text-center space-y-4">
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mx-auto my-4 w-64 h-64 object-cover rounded-lg border"
            />
          )}
          <button
            type="submit"
            disabled={isLoading}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            {isLoading ? 'Uploading...' : 'Predict Disease'}
          </button>
        </form>

        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

        {prediction && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2 text-green-700">
              Prediction Result
            </h2>
            <p>
              <strong>Disease:</strong> {prediction.name}
            </p>
            <p>
              <strong>Cause:</strong> {prediction.cause}
            </p>
            <p>
              <strong>Cure:</strong> {prediction.cure}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiseaseIdentifier;
