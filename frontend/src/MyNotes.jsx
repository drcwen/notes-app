import React, { useEffect, useState } from "react";

const UserNotes = () => {
  const [user, setUser] = useState(null); // store user info
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  useEffect(() => {

    const fetchUser = async () => {
      setLoading(true);
      setError("");

      try {
        const token = localStorage.getItem("token"); // JWT stored after login

        const res = await fetch("http://localhost:4000/api/notes", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`, // send token in header
          },
        });

        const data = await res.json();

        if (res.ok) {
          setUser(data);

        } else {
          setError(data.error || "Failed to fetch user");
        }

      } catch (err) {
        console.error(err);
        setError("Server error. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div class='items-center bg-gray-100'>
        <div class='p-6 flex justify-between items-center'>
            
            <h1 className='text-xl p-10'>Hello, {user.firstName}</h1>

            <div class='justify-between items-center'>
                <a class='m-7 inline-block text-black py-2 px-4 rounded hover:bg-blue-600 transition duration-300 cursor-pointer'>Add</a>
                <a class='m-7 m-7 inline-block text-black py-2 px-4 rounded hover:bg-blue-600 transition duration-300 cursor-pointer'>Logout</a>
            </div>
        </div>

        <div class="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    
            <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
                <div class="p-6">
                    <h2 class="text-xl font-semibold mb-2">Card Title</h2>
                    <p class="text-gray-600 mb-4">
                        This is a basic card component built with Tailwind CSS utility classes. It's fully customizable and responsive.
                    </p>
                    <a href="#" class="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                        Edit
                    </a>
                </div>
            </div>

            <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
                <div class="p-6">
                    <h2 class="text-xl font-semibold mb-2">Card Title</h2>
                    <p class="text-gray-600 mb-4">
                        This is a basic card component built with Tailwind CSS utility classes. It's fully customizable and responsive.
                    </p>
                    <a href="#" class="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                        Edit
                    </a>
                </div>
            </div>

            <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
                <div class="p-6">
                    <h2 class="text-xl font-semibold mb-2">Card Title</h2>
                    <p class="text-gray-600 mb-4">
                        This is a basic card component built with Tailwind CSS utility classes. It's fully customizable and responsive.
                    </p>
                    <a href="#" class="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                        Edit
                    </a>
                </div>
            </div>

            <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
                <div class="p-6">
                    <h2 class="text-xl font-semibold mb-2">Card Title</h2>
                    <p class="text-gray-600 mb-4">
                        This is a basic card component built with Tailwind CSS utility classes. It's fully customizable and responsive.
                    </p>
                    <a href="#" class="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                        Edit
                    </a>
                </div>
            </div>

            <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
                <div class="p-6">
                    <h2 class="text-xl font-semibold mb-2">Card Title</h2>
                    <p class="text-gray-600 mb-4">
                        This is a basic card component built with Tailwind CSS utility classes. It's fully customizable and responsive.
                    </p>
                    <a href="#" class="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                        Edit
                    </a>
                </div>
            </div>

            <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
                <div class="p-6">
                    <h2 class="text-xl font-semibold mb-2">Card Title</h2>
                    <p class="text-gray-600 mb-4">
                        This is a basic card component built with Tailwind CSS utility classes. It's fully customizable and responsive.
                    </p>
                    <a 
                        href="#" 
                        class="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 cursor-pointer">
                        Edit
                    </a>
                </div>
            </div>

            
        </div>
    </div>
  );
};

export default UserNotes;
