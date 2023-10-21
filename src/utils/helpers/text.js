const truncate = (text , length) =>
      text?.length >  length ? `${text.substring(0,length)}...` : text;

      export default truncate