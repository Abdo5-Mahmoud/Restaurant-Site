type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return (
    <>
      <button type="button" title="order button">
        <a href="#reservation">{text}</a>
      </button>
    </>
  );
}
