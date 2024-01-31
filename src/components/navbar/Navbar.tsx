

function Navbar() {
 
  

    return (
      <>
       <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
            <div className="container flex justify-between text-lg">
              <div className='text-2xl font-bold uppercase'>Farmácia</div>
  
              <div className='flex gap-4'>
                <div className='hover:underline'>Categoria</div>
                <div className='hover:underline'>Cadastrar Categoria</div>
                <div className='hover:underline'>Editar Categoria</div>
                <div className='hover:underline'>Deletar Categoria</div>
              </div>
            </div>
          </div>
      </>
    )
  }
  
  export default Navbar