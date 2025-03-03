// components/FeatureCard.tsx
type FeatureProps = {
    title: string;
    description: string;
    icon: string;
  };
  
  const FeatureCard = ({ title, description, icon }: FeatureProps) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 text-center transition hover:shadow-xl">
        <div className="text-pink-500 text-5xl">{icon}</div>
        <h3 className="text-lg font-bold text-gray-800 mt-4">{title}</h3>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
    );
  };
  
  export default FeatureCard;
  