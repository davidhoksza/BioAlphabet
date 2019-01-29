from string import ascii_uppercase
import time

import __main__
__main__.pymol_argv = ['pymol', '-q']

import pymol
pymol.finish_launching()

from pymol import cmd

cmd.set('use_shaders', 'off')

for c in ascii_uppercase:
    cmd.load('../data/protein_alpabet/{}.pse'.format(c))
    cmd.set('ray_opaque_background', 'off')
    cmd.set('opaque_background', 'on')
    cmd.png('{}.png'.format(c), width=1200, height=1200, dpi=300, ray=1)
    time.sleep(3)