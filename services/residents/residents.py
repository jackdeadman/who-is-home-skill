import subprocess

def is_online(ip):
    stdout = subprocess.Popen(['./is_online.sh', ip],
                                stdout=subprocess.DEVNULL)
    stdout.communicate()
    return stdout.returncode == 0
