function SubmitButton({ text, type, className }) {
  return (
    <button type={type} className={className}>
      {text}
    </button>
  );
}

export default SubmitButton;
