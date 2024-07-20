function Panigation() {
  return (
    <>
      <div className="join">
        <input
          className="join-item btn btn-badge btn-sm"
          type="radio"
          name="options"
          aria-label="1"
          defaultChecked
        />
        <input
          className="join-item btn btn-badge btn-sm"
          type="radio"
          name="options"
          aria-label="2"
        />
        <input
          className="join-item btn btn-badge btn-sm"
          type="radio"
          name="options"
          aria-label="3"
        />
        <input
          className="join-item btn btn-badge btn-sm"
          type="radio"
          name="options"
          aria-label="4"
        />
      </div>
    </>
  );
}

export default Panigation;
