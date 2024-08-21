// Feedback.tsx
interface FeedbackProps {
    analysis: string; // 型を指定
  }
  
  const Feedback: React.FC<FeedbackProps> = ({ analysis }) => {
    return (
      <div>
        <h2>Feedback</h2>
        <p>{analysis}</p>
      </div>
    );
  };
  
  export default Feedback;