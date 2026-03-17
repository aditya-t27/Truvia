export default function FeatureCard({ title, description, image }) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center h-80">
        <img src={image} alt={title} className="w-24 h-24 object-cover mb-4 rounded-lg" />
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    );
  }
  