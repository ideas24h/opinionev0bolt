import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const FeedbackForm: React.FC = () => {
  const { businessId } = useParams<{ businessId: string }>();
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el feedback al backend
    console.log('Feedback enviado:', { businessId, rating, comment });
    alert('¡Gracias por tu opinión!');
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Deja tu opinión</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Calificación
          </label>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                className={`w-10 h-10 rounded-full ${
                  rating === value ? 'bg-yellow-400' : 'bg-gray-200'
                }`}
                onClick={() => setRating(value)}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-gray-700 text-sm font-bold mb-2">
            Comentario
          </label>
          <textarea
            id="comment"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Cuéntanos tu experiencia..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Enviar opinión
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;