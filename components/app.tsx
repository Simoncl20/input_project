'use client';



import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";

import { useState } from "react";



export function App() {

  const [message, setMessage] = useState("");



  const handleSubmit = async () => {

    try {

      const response = await fetch('https://pyn25b8xo6.execute-api.us-east-1.amazonaws.com/dev/texts', {

        method: 'POST',

        mode: 'no-cors',

        headers: {

          'Content-Type': 'application/json',

        },

        body: JSON.stringify({ text: message }),

      });





      console.log('Success:');



      // Mostrar alerta

      alert('Mensaje enviado');



      // Vaciar el textarea

      setMessage("");



    } catch (error) {

      console.error('Error:', error);

    }

  };



  return (

    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">

      <div className="max-w-md w-full space-y-6 px-4 sm:px-6">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Si mañana fuera el último día yo...</h1>
        </div>

        <div className="space-y-4">

          <Textarea

            className="w-full h-40 p-4 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"

            id="message"

            placeholder="Escribe aquí..."

            value={message}

            onChange={(e) => setMessage(e.target.value)}

          />

          <div className="flex  items-center">

            <Button

              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"

              onClick={handleSubmit}

            >

              Enviar

            </Button>


          </div>

        </div>

      </div>

    </div>

  );

}