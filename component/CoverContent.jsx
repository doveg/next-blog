export default function CoverContent({ path, alt }) {
  return (
    <div className="">
      <img src={path} alt={alt} className="mx-auto rounded-md" />
    </div>
  );
}
