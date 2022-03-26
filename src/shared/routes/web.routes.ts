import { Express } from 'express';
import roleRouter from '../../../src/modules/setup/_roles/role.routes';
import accountRouter from '../../../src/modules/account/account.routes';
import authRoutes from '../../../src/modules/auth/auth.routes';
import userRoutes from '../../../src/modules/user/user.routes';
import investmentRoutes from '../../../src/modules/investment/investment.routes';
import defaultRoutes from '../../../src/modules/_default/default.routes';
import adminRoutes from '../../modules/admin/admin.routes';
import dashboardRoutes from '../../modules/dashboard/dashboard.routes';
import affiliateRoutes from '../../modules/affiliate/affiliate.routes';
import vendorRoutes from '../../modules/vendor/vendor.routes';

const routes = async (app: Express): Promise<void> => {
  app.use('/roles', roleRouter);
  app.use('/accounts', accountRouter);
  app.use('/auth', authRoutes);
  app.use('/users', userRoutes);
  app.use('/investments', investmentRoutes);
  app.use('/dashboard', dashboardRoutes);
  app.use('/affiliate', affiliateRoutes);
  app.use('/vendor', vendorRoutes);
  app.use('/', defaultRoutes);
  adminRoutes(app);
};

export default routes;
