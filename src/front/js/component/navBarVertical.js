import React from "react";
const NavbarVertical = () => {
  return (
    <>
      <div className="Container d-flex align-items-start" style={{width: 20 + 'rem', padding: 2 + 'rem'}}>
        <div
          className="nav flex-column nav-pills me-3 "
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical" 
        >
          <button
            className="nav-link active "
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
            type="button "
            className="btn btn-outline-warning"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            Ver mis Caballos
          </button>
          <button
            className="nav-link"
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-profile"
            type="button"
            className="btn btn-outline-warning"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            Modificar Usuario
          </button>
          <button
            className="nav-link"
            id="v-pills-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-messages"
            type="button"
            className="btn btn-outline-warning"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            Subir Caballo
          </button>
          <button
            className="nav-link"
            id="v-pills-settings-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-settings"
            type="button"
            className="btn btn-outline-warning"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            Cerrar Sesión
          </button>
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
          >
            ...
          </div>
        </div>
      </div>
    </>
  );
};
export default NavbarVertical;
