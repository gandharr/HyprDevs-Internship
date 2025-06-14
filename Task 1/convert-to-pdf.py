import pdfkit
import os

def convert_html_to_pdf():
    # Configure pdfkit options
    options = {
        'page-size': 'A4',
        'margin-top': '0.75in',
        'margin-right': '0.75in',
        'margin-bottom': '0.75in',
        'margin-left': '0.75in',
        'encoding': 'UTF-8',
        'no-outline': None
    }

    try:
        # Convert HTML to PDF
        pdfkit.from_file('style-guide.html', 'design-system-style-guide.pdf', options=options)
        print("PDF created successfully: design-system-style-guide.pdf")
    except Exception as e:
        print(f"Error creating PDF: {str(e)}")

if __name__ == "__main__":
    convert_html_to_pdf() 