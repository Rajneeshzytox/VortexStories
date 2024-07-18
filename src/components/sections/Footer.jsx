export default function Footer() {
  return (
    <>
    {/* Footer classs for the layout */}
    <footer className="Footer flex items-center flex-col">

        <form className="flex lg:flex-row lg:px-10 py-4 flex-col items-center justify-between w-full bg-base-200 ">
          <h6 className="footer-title">
            Newsletter
          </h6>
          <fieldset className="form-control w-80 flex items-center">
            <label className="label">
              <span className="label-text">Get awesome stories directly on your mail</span>
            </label>
            <div className="join rounded-xl">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>

    {/* ACTUAL FOOTER WITH LINKS  */}
      <div className="footer overflow-clip  text-base-content p-10 bg-base-300 *:min-w-32 z-auto">
        <nav>
          <h6 className="footer-title z-0">Vortex Stories </h6>
          <a className="link link-hover">Articles Generator</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Apply For Admin</a>
          <a className="link link-hover">Timeline Project Docs</a>
        </nav>
        <nav>
          <h6 className="footer-title">Articles</h6>
          <a className="link link-hover">Trending</a>
          <a className="link link-hover">Stories</a>
          <a className="link link-hover">News</a>
          <a className="link link-hover">Report</a>
        </nav>
        <nav>
          <h6 className="footer-title">My Profile</h6>
          <a className="link link-hover">Create Post</a>
          <a className="link link-hover">My Posts</a>
          <a className="link link-hover">Sign Up/In</a>
        </nav>
      </div>
    </footer>
    </>
  );
}
