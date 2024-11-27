function updateServerDetails() {
    const serverSelect = document.getElementById('server');
    const ramInput = document.getElementById('ram');
    const coreInput = document.getElementById('core');
    const storageInput = document.getElementById('storage');
    const packInput = document.getElementById('pack');
    const taxInput = document.getElementById('tax');
    const extraInput = document.getElementById('Extra');
    const totalInput = document.getElementById('Total');

    const serverDetails = {
        '2GB': { ram: '2 GB', core: '1 Core', storage: '5 GB', price: 5 },
        '4GB': { ram: '4 GB', core: '2 Core', storage: '10 GB', price: 10 },
        '6GB': { ram: '6 GB', core: '3 Core', storage: '20 GB', price: 15 },
        '8GB': { ram: '8 GB', core: '4 Core', storage: '30 GB', price: 20 },
        '10GB': { ram: '10 GB', core: '5 Core', storage: '40 GB', price: 25 },
        '12GB': { ram: '12 GB', core: '6 Core', storage: '50 GB', price: 30 },
        '13GB': { ram: '13 GB', core: '7 Core', storage: '100 GB', price: 45 },
        '14GB': { ram: '14 GB', core: '8 Core', storage: '150 GB', price: 40 },
        '15GB': { ram: '15 GB', core: '10 Core', storage: '200 GB', price: 60 }
    };

    const selectedPack = serverSelect.value;

    if (serverDetails[selectedPack]) {
        ramInput.value = serverDetails[selectedPack].ram;
        coreInput.value = serverDetails[selectedPack].core;
        storageInput.value = serverDetails[selectedPack].storage;

        const packPrice = serverDetails[selectedPack].price;
        const tax = packPrice * 0.18;
        const extraRam = 0; 
        const totalPrice = packPrice + tax + extraRam;

        packInput.value = `$${packPrice.toFixed(2)}`;
        taxInput.value = `$${tax.toFixed(2)}`;
        extraInput.value = `$${extraRam.toFixed(2)}`;
        totalInput.value = `$${totalPrice.toFixed(2)}`;
    } else {
        
        ramInput.value = '';
        coreInput.value = '';
        storageInput.value = '';
        packInput.value = '';
        taxInput.value = '';
        extraInput.value = '';
        totalInput.value = '';
    }
}
