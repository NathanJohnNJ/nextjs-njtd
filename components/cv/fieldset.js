const Fieldset = (props) => {
  const { title, content } = props;

  return(
    <div className="border-2 border-gray-500 w-full whitespace-nowrap relative mt-[30px] rounded-tr-xl rounded-br-xl rounded-bl-xl bg-gradient-to-br from-neutral-300 to-white">
      <div className="border-2 -mt-[15px] border-gray-500 rounded-tr-xl p-[1.5px] rounded-br-xl pr-2 pl-[4.5px] absolute -ml-[1.5px] bg-gradient-to-r from-neutral-300 via-neutral-600 to-black text-white font-geo font-bold">{title}</div>
      <div className="mt-4">{content}</div>
    </div>
  )
}

export default Fieldset;