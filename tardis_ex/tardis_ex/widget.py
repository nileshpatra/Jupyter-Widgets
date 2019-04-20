import tardis
from tardis import run_tardis
from tardis.gui import interface
from ipywidgets import HBox, VBox, Button, Text


class custommodel:
	def __init__(self , cfg):
		self.cfg = cfg
		button = Button(description="show shell", tooltip="Click me")
		button.on_click(lambda b : self.show())

	def show():
		mdl = run_tardis(self.cfg)
		interface.show(mdl)
