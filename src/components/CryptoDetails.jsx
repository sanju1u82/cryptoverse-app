import React, {useState} from 'react';
import HTMLReactParser from 'html-react-parser';
import millify from 'millify';
import { useParams } from 'react-router-dom';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { useGetCryptoDetailsQuery } from '../services/cryptoApi';

const { Title, Text} = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const { cryptoId } = useParams();
  const [timePeriod, settimePeriod] = useState('7d')
  const { data, isFetching } = useGetCryptoDetailsQuery(cryptoId)
  
  const cryptoDetails = data?.data?.coin;
}
export default CryptoDetails;