from ipywidgets import HBox , VBox , RadioButtons , Dropdown 

class Tardis_UI(object):
    def __init__(self , mdl):
        #simulation object passed 
        self.mdl = mdl

    def radUI(self):
        #contains UI for Rad , returns the instance of net widget created
        pass

    def WsUI(self):
        #contains WsUI for Rad , returns the instance of net widget created
        pass
    
    def maketable(self):
        #makes table of shells , which stays fixed in all the UI created
        pass

    def show(self):
        #shows the final UI , mak the complete widget 
        pass

if __name__ == '__main__':
    print('enter')
    obj = Tardis_UI('123')
    obj.radUI()
    obj.WsUI()
    obj.maketable()
    obj.show()
    print('exit')