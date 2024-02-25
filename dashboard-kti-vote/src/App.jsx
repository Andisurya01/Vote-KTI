import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import { getCategory1 } from './api/categories';
function App() {

  useEffect(() => {
    getCategory1().then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <main className='bg-gray-100'>
      <section className='mx-auto gap-10 pt-10 grid grid-cols-2'>
        <div className='bg-white mx-10 shadow-lg rounded-md p-5'>
          <h1 className='text-2xl font-bold p-5'>Hasil Voting</h1>
          <Bar
            data={{
              labels: ["manajer 1", "manajer 2", "manajer 3", "manajer 4"],
              datasets: [
                {
                  label: "Kategori terbaik",
                  data: [1, 2, 3, 4],
                }
              ]
            }}
          />
        </div>
        <div className='bg-white mx-10 shadow-lg rounded-md p-5'>
          <h1 className='text-2xl font-bold p-5'>Hasil Voting</h1>
          <Bar
            data={{
              labels: ["manajer 1", "manajer 2", "manajer 3", "manajer 4"],
              datasets: [
                {
                  label: "Kategori terbaik",
                  data: [1, 2, 3, 4],
                }
              ]
            }}
          />
        </div>
        <div className='bg-white mx-10 shadow-lg rounded-md p-5'>
          <h1 className='text-2xl font-bold p-5'>Hasil Voting</h1>
          <Bar
            data={{
              labels: ["manajer 1", "manajer 2", "manajer 3", "manajer 4"],
              datasets: [
                {
                  label: "Kategori terbaik",
                  data: [1, 2, 3, 4],
                }
              ]
            }}
          />
        </div>
        <div className='bg-white mx-10 shadow-lg rounded-md p-5'>
          <h1 className='text-2xl font-bold p-5'>Hasil Voting</h1>
          <Bar
            data={{
              labels: ["manajer 1", "manajer 2", "manajer 3", "manajer 4"],
              datasets: [
                {
                  label: "Kategori terbaik",
                  data: [1, 2, 3, 4],
                }
              ]
            }}
          />
        </div>
      </section>
    </main>
  )
}

export default App
