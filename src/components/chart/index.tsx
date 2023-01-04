import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { option } from './config';

export default function Chart() {
    return (
        <div style={{ marginTop: 70, display: 'flex', justifyContent: 'center' }}>
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={'chart'}
                    options={option}
                />
            </div>
        </div>
    );
}

//  مزایا

// 1 - منبع باز و مجانی فقط برای استفاده غیر تجاری و تبلیغاتی
// 2 - پشتیبانی از تقریبا همه اشکال بصری سازی داده
// 3 - مورد اعتماد و استفاده شده از ۸۰ کمپانی از ۱۰۰ کمپانی بزرگ دنیا. مثلا facebook، twitter، Apple، Visa و... از این کتابخانه استفاده می کنند.
// 4 - پشتیبانی از تقریبا تمام مرورگر های مدرن (حتی IE6 به بالا)
// 5 -جامعه بسیار وسیع و مثال های متعدد و بسیار خوب
// 6 -آموزش های بسیار عالی. حتی کتاب هایی برای آموزش این کتابخانه نوشته شده اند

//  معایب

// 1 - تنها عیب آن قیمت بسیار بالای آن برای استفاده تجاری و تبلیغاتی می باشد. قیمت آن از ۵۹۰ دلار برای یک برنامه نویس شروع می شود!
