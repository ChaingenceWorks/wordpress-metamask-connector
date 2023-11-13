document.addEventListener('DOMContentLoaded', function() {
    const connectButton = document.getElementById('connectMetamask');

    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');

        connectButton.addEventListener('click', function() {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(accounts => {
                    if (accounts.length > 0) {
                        const account = accounts[0];
                        console.log('Connected account:', account);

                        // Change button text and add 'connected' class
                        connectButton.textContent = 'Connected with MetaMask';
                        connectButton.classList.add('connected');
                    }
                })
                .catch(error => {
                    console.error('Error connecting to MetaMask:', error);
                });
        });
    } else {
        connectButton.textContent = 'MetaMask is not installed';
        connectButton.disabled = true;
    }

    // Optional: Listen for account changes
    window.ethereum.on('accountsChanged', function (accounts) {
        // Handle the new accounts, or reload the page
        console.log('Accounts changed:', accounts);
        if (accounts.length === 0) {
            // User has disconnected all accounts
            connectButton.textContent = 'Connect to MetaMask';
            connectButton.classList.remove('connected');
        }
    });

    // Optional: Listen for network changes
    window.ethereum.on('chainChanged', function (chainId) {
        // Handle the new chain, or reload the page
        console.log('Chain changed:', chainId);
    });
});
