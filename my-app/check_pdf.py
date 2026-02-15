
try:
    import pypdf
    print("pypdf is installed")
except ImportError:
    try:
        import PyPDF2
        print("PyPDF2 is installed")
    except ImportError:
        print("Neither pypdf nor PyPDF2 is installed")
