

const Banner = () => {
    return (
        <div
  className="min-h-screen hero"
  style={{
    backgroundImage: "url(https://img.freepik.com/premium-photo/flat-lay-camera-accesories-with-copy-space_23-2148363454.jpg?w=740)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="text-center hero-content text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hablu Camera</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;