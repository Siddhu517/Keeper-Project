import React from "react";

export const Form = ({
  SubmitHandle,
  title,
  setTitle,
  note,
  setNote,
  data,
  handleDelete,
  handleEdit,
  edit,
  OnValueChange,
  editNotesData,
}) => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-md-center">
        <div className="col-md-5 ">
          <form className="form w-100" onSubmit={SubmitHandle}>
            <div className="form-group shadow">
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className=" title border-0 px-3 p-2 w-100 border-bottom"
                placeholder="title..."
                type="text"
              />
              <textarea
                className=" content border-0 w-100 px-3 pt-1"
                style={{ height: "80px" }}
                placeholder="notes..."
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-outline-primary btn-lg rounded">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container-fluid">
        {data.map((note) => (
          <div className="card h-auto w-auto shadow" key={note._id}>
            <div
              className="card-header "
              style={{
                fontSize: "20px",
                fontFamily: "cursive",
                background: "none",
              }}
            >
              {note.title}

              <button
                className="position-absolute top-4 end-0 pe-5"
                style={{
                  border: "none",
                  background: "none",
                }}
                onClick={() => handleEdit(note._id)}
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
              >
                <ion-icon name="create-outline"></ion-icon>
              </button>
              <button
                className="position-absolute top-4 end-0 pe-2 "
                style={{
                  border: "none",
                  background: "none",
                }}
                onClick={() => handleDelete(note._id)}
              >
                <ion-icon
                  className=""
                  style={{ fontSize: "20px" }}
                  name="trash-outline"
                ></ion-icon>
              </button>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Edit Notes
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="mb-3">
                          <label
                            htmlFor="recipient-name"
                            className="col-form-label"
                          >
                            Title
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="recipient-name"
                            onChange={(e) => OnValueChange(e)}
                            name="title"
                            value={edit.title}
                            placeholder=""
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="message-text"
                            className="col-form-label"
                          >
                            Notes
                          </label>
                          <textarea
                            className="form-control"
                            id="message-text"
                            onChange={(e) => OnValueChange(e)}
                            name="body"
                            value={edit.body}
                            placeholder=""
                          />
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        onClick={() => editNotesData(note._id)}
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <blockquote className="blockquote ">
                <p className="p-2" style={{ fontFamily: "serif" }}>
                  {note.body}
                </p>
                <footer className="blockquote-footer  m-1 p-0 ">
                  <cite title="Source Title" style={{ fontSize: "10px" }}>
                    {note.footer}
                  </cite>
                </footer>
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
