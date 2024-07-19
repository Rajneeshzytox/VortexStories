// unsed in src > components > sections > header.jsx

export default function InfoModal(){
    return(
        <>
          {/* #### Modal Box Info starts */}
      <div className="Info-Modal-Box fixed z-50 bottom-10 right-6">
        {/* info modal Box */}
        <label
          htmlFor="info-modal"
          className="cursor-help btn btn-circle btn-sm btn-primary animate-bounce"
        >
          i
        </label>

        {/* checkbox to toggle modal box */}
        <input type="checkbox" id="info-modal" className="modal-toggle" />

        {/* info modal box */}
        <div className="modal z-50" role="dialog">
          <div className="modal-box">
            <h4 className="text-lg uppercase font-bold text-primary">Vortex Stories Info</h4>
            <p>Project info <a href="#" className="link link-hover text-info-content bg-secondary rounded-md px-2 ">download</a> </p>
          </div>
          <label htmlFor="info-modal" className="modal-backdrop select-none">
            close info box
          </label>
        </div>
      </div>
      {/* #### Modal Box Info starts */}
        </>
    )
}