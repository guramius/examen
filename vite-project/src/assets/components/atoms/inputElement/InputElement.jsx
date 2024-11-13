const InputElement = ({ onChange, placeholder, maxLength, type  }) => {
    return (
      <div>
        <input
          className='w-[381px] h-[45px] flex-shrink-0 rounded-[8px] border border-[#DFDEE0] bg-[#FFF]'        
          onChange={onChange} 
          placeholder={placeholder}
          maxLength={maxLength} 
          type={type}
        />
      </div>
    );
  };
  
  export default InputElement;
  