import "./App.css";
import ProductCard from "./components/productCard";

function App() {
	return (
		<>
			<div className="h-[700px] w-[700px] relative  border-[5px] flex justify-center items-center">
				<button className="bg-green-900 absolute top-[0px] right-[0px]">
					X
				</button>

				<div className="w-[300px] h-[100px] relative bg-blue-400 flex justify-center items-center">
					<button className="bg-red-900 absolute top-[0px] right-[0px]">
						X
					</button>
					<button className="text-white bg-green-500 fixed bottom-[0px] right-[0px] p-[20px]">
						Chat with whatsapp
					</button>

					<h1>Your time has over</h1>
				</div>

        <div className="w-[300px] h-[300px] bg-pink-400 p-[40px] m-[20px]">
          <div className="w-[50px] h-[50px] bg-yellow-500">

          </div>
         

        </div>
			</div>
		</>
	);
}

export default App;
 