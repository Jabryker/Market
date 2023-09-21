import { Spin } from "antd"
import axios from "axios"
import { FC, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
  IProduct,
  ProductDetailsMolecules,
} from "../../components/molecules/ProductDetailsMolecules/ProductDetailsMolecules"

export const ProductDetailsTemplate: FC = () => {
  const { id } = useParams<{ id: string }>()
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState<IProduct | null>(null)
  const baseURL = process.env.REACT_APP_API_URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseURL}/api/v1/stores/products/${id}/`,
        )
        setProduct(response.data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching product details:", error)
        setLoading(false)
      }
    }

    if (id) {
      fetchData()
    }
  }, [])

  return (
    <div>
      {loading ? (
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      ) : (
        <>
          <ProductDetailsMolecules product={product} />
        </>
      )}
    </div>
  )
}
