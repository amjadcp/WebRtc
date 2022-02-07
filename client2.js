const offer = 'ENTER SDP FROM CLIENT1'

const connection = new RTCPeerConnection()

connection.onicecandidate=(e)=>console.log("SDP : " + JSON.stringify(connection.localDescription));

connection.ondatachannel=(e)=>{
    connection.dataChannel = e.channel
    connection.dataChannel.onmessage=(e)=>console.log('Message from Client1 : ' + e.data);
    connection.dataChannel.onopen=(e)=>console.log("Connection opened!");
    connection.dataChannel.onclose=(e)=>console.log("Connection closed!");
}

connection.setRemoteDescription(offer).then((message)=>console.log("offerset"))

await connection.createAnswer().then((message)=>connection.setLocalDescription(message)).then((message)=>console.log(JSON.stringify(connection.localDescription)))

//process 2
connection.dataChannel.send("message")
