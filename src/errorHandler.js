async function SaveError(err) {
    const url = 'https://discord.com/api/webhooks/1268946930336006175/vkGtSFz7rvM8j-jOQVnBssMvch1B1_qIg4kYR1-xB_FD8PGI2tM-w3su1dH_HgLW1Rk_';

    const message = 'from janimeapi: ' + err;
    const body = JSON.stringify({
        content: message  // This sends a simple message; if you want to send an embed or other complex message, you would adjust this structure
    });

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body
    });

    if (!response.ok) {
        console.error('Failed to send message to Discord webhook:', response.status);
    }
}

export { SaveError }
