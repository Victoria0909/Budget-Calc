const Modal = (props) => {
	return (
		<>
			<
				className="Modal"
				style={{
					display: props.show ? "block" : "none",
				}}
			>
				{props.children}
			</>
			
	);
};

export default Modal;
