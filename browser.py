
import sys
from PyQt5.QtCore import *
from PyQt5.QtWidgets import *
from PyQt5.QtWebEngineWidgets import*
from PyQt5.QtGui import QIcon  # Add this line to import QIcon
#Functions definition and creation of classes:
class MainWindow(QMainWindow):
    def __init__(self):
        super(MainWindow, self).__init__()

        # Set the application icon
        icon_path = 'static/control.ico'  # Replace with the path to your icon
        self.setWindowIcon(QIcon(icon_path))
        super(MainWindow,self).__init__()
        self.browser = QWebEngineView()
        self.browser.setUrl(QUrl("http://127.0.0.1:5000/"))
        self.setCentralWidget(self.browser)

        self.showFullScreen()
# Coding for buttons and their functionalities:
        #navbar
        navbar = QToolBar()

        

        self.url_bar=QLineEdit()
        
        

        self.browser.urlChanged.connect(self.update_url)
         
    def navigate_home(self):
        self.browser.seturl(QUrl("http://127.0.0.1:5000/"))

    def navigate_to_url(self):
        url=self.url_bar.text()
        self.browser.setUrl(QUrl(url))

    def update_url(self,q):
        self.url_bar.setText(q.toString())


with open('license/license_validation_result.txt', 'r') as result_file:
    result_value_str = result_file.read()

# Преобразование строки в булево значение
result_value = bool(result_value_str)

if result_value:
    print("The result is True.")
    app=QApplication(sys.argv)
    QApplication.setApplicationDisplayName('SimplyScada WebClient')

    window = MainWindow()
    app.exec_()
else:
    print("The result is False.")