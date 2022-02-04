const Form = () =>  {
    return (
      <>
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" onClick={()=>alert('cool')} />
        </form>
      </>
    );
  }
  
  export default Form