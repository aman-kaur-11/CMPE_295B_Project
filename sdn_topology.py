from mininet.net import Mininet
from mininet.node import Controller, OVSSwitch, RemoteController
from mininet.cli import CLI
from mininet.log import setLogLevel

def simpleTopology():
    "Creates a simple topology of two hosts connected through a switch."

    net = Mininet(controller=None, switch=OVSSwitch)

    # Use the existing OpenDaylight controller
    c0 = net.addController('c0', controller=RemoteController, ip='127.0.0.1', port=6653)

    # Add one switch
    s1 = net.addSwitch('s1')

    # Add two hosts
    h1 = net.addHost('h1', ip='10.0.0.1')
    h2 = net.addHost('h2', ip='10.0.0.2')

    # Create links
    net.addLink(h1, s1)
    net.addLink(h2, s1)

    # Start the network
    net.start()

    # Run CLI
    CLI(net)

    # After CLI, stop the network
    net.stop()

if __name__ == '__main__':
    setLogLevel('info')
    simpleTopology()