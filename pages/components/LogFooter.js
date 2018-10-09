const LogFooter = () => (
    <div>
        <footer className="footer">
            <div className="container-fluid">
                <div class="row justify-content-md-center">
                    <span className="text-muted ">Copyright: Tajawal Inc - 2018</span>
                </div>
            </div>
        </footer>  
        <style jsx>{`
        .footer {
            position: relative;
            bottom: 0;
            width: 100%;
            height: 60px;
            line-height: 60px;
            background-color: #f5f5f5;
            justify-content : center;
        }
    `}    
    </style>
    </div>
)

export default LogFooter