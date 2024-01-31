function Home() {

    return (
        <>
            <div className="bg-indigo-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vindo
                        </h2>
                        <p className='text-xl'>
                            Tenha Acesso a todos os produtos que desejar
                         </p>

                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                               
                            </div>
                        </div>

                    </div>

                    <div id="imagem" className="
                        flex 
                        justify-center
                        ">
                        <img
                            src="https://img.freepik.com/vetores-premium/farmaceutica-medica-em-farmacia-online-dentro-do-conceito-de-smartphone-de-farmacia-online_530733-2938.jpg?w=996"
                            alt="Imagem da Página Home"
                            className="w-2/3"
                        />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Home