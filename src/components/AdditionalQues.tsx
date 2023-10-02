import FormBuilder from "./FormBuilder";

const AdditionalQues = () => {
	return (
		<div className="flex flex-col w-[500px] rounded-3xl shadow-xl ml-10 mt-4">
			<div className="py-6 px-7 text-xl font-semibold bg-cyan-100 rounded-tl-2xl rounded-tr-2xl">
				Additional Questions
			</div>

			<div className=" flex flex-col gap-4  justify-center items-start   pb-6 pt-3  px-8">
				<FormBuilder />
			</div>
		</div>
	);
};

export default AdditionalQues;
