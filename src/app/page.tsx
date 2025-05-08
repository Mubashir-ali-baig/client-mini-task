import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      {/* Custom Button Component Showcase */}
      <div className="flex flex-col justify-center items-center gap-6">
        <h2 className="font-bold text-xl">Button Component</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
        </div>
      </div>
    </div>
  );
}
