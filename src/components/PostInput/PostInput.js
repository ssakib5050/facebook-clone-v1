import React from "react";
import "./PostInput.css";

const PostInput = () => {
  return (
    <div className="bg-white custom-dark-border p-2">
      <form>
        <div className="d-flex">
          <img
            src="https://via.placeholder.com/150/"
            alt=""
            className="postInput_image"
          />
          <textarea
            name=""
            id=""
            rows="3"
            className="form-control border-0"
            placeholder="What's on your mind?"
          ></textarea>
        </div>

        <div className="position-relative d-none">
          <img
            src="https://via.placeholder.com/720x480"
            alt=""
            className="img-fluid mt-2"
          />
          <button className="rounded-circle btn btn-dark text-light position-absolute postInput_post_image_btn">
            X
          </button>
        </div>

        <hr />
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <input type="file" className="d-none" id="postInput_file" />

            <button
              className="postInput_button btn bg-light custom-dark-border"
              htmlFor=""
            >
              <label
                htmlFor="postInput_file"
                className="mb-0 d-flex align-items-center"
              >
                <img
                  src="https://img.icons8.com/color/344/image.png"
                  alt=""
                  className="postInput_button_img"
                />
                Photos
              </label>
            </button>

            <button
              className="postInput_button btn bg-light custom-dark-border"
              htmlFor=""
            >
              <label className="mb-0 d-flex align-items-center">
                <img
                  src="https://img.icons8.com/bubbles/344/popular-man.png"
                  alt=""
                  className="postInput_button_img"
                />
                Tag Friends
              </label>
            </button>

            <button
              className="postInput_button btn bg-light custom-dark-border"
              htmlFor=""
            >
              <label className="mb-0 d-flex align-items-center">
                <img
                  src="https://img.icons8.com/emoji/452/slightly-smiling-face.png"
                  alt=""
                  className="postInput_button_img"
                />
                Emoji
              </label>
            </button>
          </div>
          <div className="d-flex">
            <button
              className="btn btn-primary"
              style={{ border: "1px solid transparent" }}
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostInput;
