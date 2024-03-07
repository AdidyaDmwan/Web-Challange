function FooterSocialMedia(props) {
    return (
      <>
        <div className="flex gap-2 my-0 mx-auto">
          <i className="fa-brands fa-facebook"></i>
          <p>{props.text}</p>
        </div>
      </>
    )
  }
  
  export default FooterSocialMedia;