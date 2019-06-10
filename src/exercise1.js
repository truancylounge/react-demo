class ProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showProductsInStock: false,
            filteredProducts: this.props.products
        }

        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    }

    handleCheckBoxChange(showProductsInStock) {
        console.log(`ShowProductsInStock: ${showProductsInStock} `);
        let filteredProducts;
        if(showProductsInStock) {
            filteredProducts = this.props.products.filter(product => product.stocked === true);
        } else {
            filteredProducts = this.props.products;
        }

        this.setState({showProductsInStock, filteredProducts});
    }

    handleSearchTextChange(searchText) {
        let filteredProducts = this.props.products.filter(product => product.name.includes(searchText) );

        this.setState({filteredProducts});


    }

    render() {
        return (
            <div>
                <h1>Product Catalog</h1>
                <SearchBox showProductsInStock={this.state.showProductsInStock} onInStockChange={this.handleCheckBoxChange} 
                            handleSearchTextChange={this.handleSearchTextChange}/>
                <br/>
                <Products products={this.state.filteredProducts}/>
            </div>
        )
    }
}

class Products extends React.Component {
    constructor(props) {
        super(props);
        console.log(`Product Data: %j`, this.props.products);
    }

    render() {
        const rows = [];
        if(this.props.products.length > 0) {
            let category = this.props.products[0].category;
            rows.push(<ProductHeader key={category} category={category} />);
            this.props.products.forEach(product => {
                if(product.category !== category ) {
                    category = product.category;
                    rows.push(<ProductHeader key={category} category={category} />);
                }
                rows.push(<ProductRow key={product.name} name={product.name} price={product.price} />)
            })
        }
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}

class ProductHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr key={this.props.category}><th colSpan="2">{this.props.category}</th></tr>
        )
    }
}

class ProductRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
            </tr>
        )
    }
}

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showProductsInStock: this.props.showProductsInStock
        }

        this.onCheckBoxChange = this.onCheckBoxChange.bind(this);
        this.onSearchTextChange = this.onSearchTextChange.bind(this);
    }

    onCheckBoxChange(e) {
        this.props.onInStockChange(e.target.checked);
    }

    onSearchTextChange(e) {
        console.log(`Search Text: ${e.target.value} `);
        this.props.handleSearchTextChange(e.target.value);
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.onSearchTextChange} className="row" name="search" placeholder="Search..."/><br/>
                <label><input type="checkbox" onChange={this.onCheckBoxChange} value={this.state.showProductsInStock}/>Only show products in stock</label>
            </div>
        )
    }
}


const productData = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];

ReactDOM.render(<ProductTable products={productData}/>, document.getElementById('app'));