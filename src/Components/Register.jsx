function Header() {
  return (
    <div className="text-center font-poppins mb-10">
      <span className="text-cyan">HakLab Hakathon</span>
      <h1 className="text-white text-2xl sm:text-4xl font-bold mt-5 px-4">
        Register Now
      </h1>
    </div>
  );
}

function RegisterForm() {
  return (
    <div className="bg-white rounded-lg md:p-4 w-[90%] max-w-[720px]">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSenNLDmXA8wxQq5sZ0fRG9ii92pNtiA3oWaqcE0eEyEyetQkQ/viewform?embedded=true"
        className="h-[520px] w-full md:w-[700px]"
      >
        Loading…
      </iframe>
    </div>
  );
}

export default function Register() {
  return (
    <section id="register" className="bg-[#000E41] flex flex-col items-center justify-center min-h-screen py-20">
      <Header />
      <RegisterForm />
    </section>
  );
}
