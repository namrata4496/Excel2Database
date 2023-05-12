import React, {useState} from 'react';


function Home(){
	const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

	const handleSubmission = () => {
		const formData = new FormData();

		formData.append('file', selectedFile);
        console.log(formData.path);

		fetch(
			'http://localhost:5000/importUser',
			{
				method: 'POST',
				body:formData
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};
	

	return(
   <div>



<div className="login-box">
  <h2>Excel To Database</h2>
  <form>
    <div className="user-box">
      <input type="file" name="file" onChange={changeHandler} required="" />
    </div>

    {isSelected ? (
				<div className='text-light text-left'>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p className='text-light'>Select a file to show details</p>
			)}
   


    
    <button onClick={handleSubmission} >
      <span />
      <span />
      <span />
      <span />
      Submit
    </button>
  </form>
</div>
		</div>
	)
            }

            export default Home