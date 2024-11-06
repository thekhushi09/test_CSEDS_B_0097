async function generateJoke() {
            try {
                const response = await fetch('https://v2.jokeapi.dev/joke/Any');
                const data = await response.json();

                let joke = '';

                
                if (data.type === 'single') {
                    joke = data.joke; 
                } else if (data.type === 'twopart') {
                    joke = `${data.setup} ${data.delivery}`; 
                }

                
                document.getElementById('joke').textContent = joke;
                document.getElementById('char-count').textContent = `Character Count: ${joke.length}`;
            } catch (error) {
                console.error('Error fetching joke:', error);
                document.getElementById('joke').textContent = 'Oops! Something went wrong. Try again.';
            }
        }

        
        function clearJoke() {
            document.getElementById('joke').textContent = '';
            document.getElementById('char-count').textContent = 'Character Count: 0';
        }

        
        document.getElementById('generate').addEventListener('click', generateJoke);
        document.getElementById('clear').addEventListener('click', clearJoke);