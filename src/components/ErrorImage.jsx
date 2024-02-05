import imageError from "../assets/error-img/error.png"

export default function ErrorImage() {
    return (
        <div>
            <img src={imageError} alt="ErrorImage"  />
        </div>
    );
}