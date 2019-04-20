from ._version import version_info, __version__
from .example import *
from .widget import *
from .example import *

from .__meta__ import __version__
def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'tardis_ex',
        'require': 'tardis_ex/extension'
    }]
