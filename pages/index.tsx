import Alert from "@/components/elements/Alert";

export default function Home() {
  return (
    <>
      <main>
        <Alert
          Title={<p>title</p>}
          Icon={<p>ico</p>}
          variant="bordered"
          status="success"
        >
          hello
        </Alert>
        <Alert
          Title={<p>title</p>}
          Icon={<p>ico</p>}
          variant="filled"
          status="primary"
          className="text-black"
        >
          hello
        </Alert>
        <Alert
          Title={<p>title</p>}
          Icon={<p>ico</p>}
          variant="bordered"
          status="primary"
        >
          hello
        </Alert>
      </main>
    </>
  );
}
